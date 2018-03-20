using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Project.Models.Requests;
using System.Data.SqlClient;
using Project.Models.Domain;

namespace Project.Services.Services
{
    public class PersonService
    {
        private string connStr = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public void Insert(PersonAddRequest model)
        {
            using(SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Person_Insert";
                using(SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@AccountId", model.AccountId);
                    cmd.Parameters.AddWithValue("@Username", model.Username);
                    cmd.Parameters.AddWithValue("@PhotoId", model.PhotoId);
                    cmd.Parameters.AddWithValue("@Description", model.Description);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }

        public List <Person> GetAll()
        {
            List<Person> result = new List<Person>();
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Person_SelectAll";
                using(SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        Person model = new Person();
                        int index = 0;
                        model.AccountId = reader.GetInt32(index++);
                        model.Username = reader.GetString(index++);
                        model.PhotoId = reader.GetInt32(index++);
                        model.Description = reader.GetString(index++);
                        model.CreatedDate = reader.GetDateTime(index++);
                        model.ModifiedDate = reader.GetDateTime(index++);
                        model.ModifiedBy = reader.GetString(index++);
                        result.Add(model);
                    }
                    conn.Close();
                }
                return result;
            }
        }

        public Person GetById(int id)
        {
            Person result = new Person();
            using(SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Person_SelectById";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AccountId", id);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        int index = 0;
                        result.AccountId = reader.GetInt32(index++);
                        result.Username = reader.GetString(index++);
                        result.PhotoId = reader.GetInt32(index++);
                        result.Description = reader.GetString(index++);
                        result.CreatedDate = reader.GetDateTime(index++);
                        result.ModifiedDate = reader.GetDateTime(index++);
                        result.ModifiedBy = reader.GetString(index);
                    }
                    conn.Close();
                }
            }
            return result;
        }
        
        public void Update(PersonAddRequest model)
        {
            using(SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Person_Update";
                using(SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AccountId", model.AccountId);
                    cmd.Parameters.AddWithValue("@Username", model.Username);
                    cmd.Parameters.AddWithValue("@PhotoId", model.PhotoId);
                    cmd.Parameters.AddWithValue("@Description", model.Description);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }

        public void Delete(int id)
        {
            using(SqlConnection conn = new SqlConnection(connStr))
            {
                string cmdText = "Person_Delete";
                using(SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AccountId", id);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }
    }
}
