using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Models.Requests
{
    public class AccountUpdateRequest: AccountAddRequest
    {
        public int Id { get; set; }
    }
}
