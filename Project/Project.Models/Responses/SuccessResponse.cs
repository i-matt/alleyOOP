using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Models.Responses
{
    public class SuccessResponse : Response
    {
        public SuccessResponse()
        {
            this.IsSuccessful = true;
        }
       
    }
}
