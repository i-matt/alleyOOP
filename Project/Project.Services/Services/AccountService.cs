using Project.Models.Domain;
using Project.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Services.Services
{
    public class AccountService
    {
        private string connStr = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public int Insert(AccountAddRequest model)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Account_Insert";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@Id";
                    param.SqlDbType = System.Data.SqlDbType.Int;
                    param.Direction = System.Data.ParameterDirection.Output;


                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(param);
                    cmd.Parameters.AddWithValue("@Email", model.Email);
                    cmd.Parameters.AddWithValue("@Password", model.Password);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }

        public List<Account> SelectAll()
        {
            List<Account> result = new List<Account>();
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Account_SelectAll";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        Account model = new Account();
                        int index = 0;
                        model.Id = reader.GetInt32(index++);
                        model.Email = reader.GetString(index++);
                        model.Password = reader.GetString(index++);
                        model.CreatedDate = reader.GetDateTime(index++);
                        model.ModifiedDate = reader.GetDateTime(index++);
                        model.ModifiedBy = reader.GetString(index);
                        result.Add(model);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public Account SelectById(int id)
        {
            Account model = new Account();
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Account_SelectById";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        int index = 0;
                        model.Id = id;
                        model.Email = reader.GetString(index++);
                        model.Password = reader.GetString(index++);
                        model.CreatedDate = reader.GetDateTime(index++);
                        model.ModifiedDate = reader.GetDateTime(index++);
                        model.ModifiedBy = reader.GetString(index);
                    }
                    conn.Close();
                }
            }
            return model;
        }

        public void Update(AccountUpdateRequest model)
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Account_Update";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", model.Id);
                    cmd.Parameters.AddWithValue("@Email", model.Email);
                    cmd.Parameters.AddWithValue("@Password", model.Password);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }

        public void Delete(int id)
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Account_Delete";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }

        public void DeleteAll()
        {
            using(SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Account_Delete_All";
                using(SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }
    }
}
