using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using Project.Models.Requests;
using System.Data.SqlClient;

namespace Project.Services.Services
{
    public class ScrapeService
    {
        private string connStr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        
        public int Insert(ScrapeAddRequest model)
        {
            int result = 0;
            using(SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Scrape_Insert";
                using(SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@Id";
                    param.SqlDbType = System.Data.SqlDbType.Int;
                    param.Direction = System.Data.ParameterDirection.Output;

                    cmd.Parameters.Add(param);
                    cmd.Parameters.AddWithValue("@Url", model.Url);
                    cmd.Parameters.AddWithValue("@Opponent", model.Opponent);
                    cmd.Parameters.AddWithValue("@Score", model.Score);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }

    }
}
