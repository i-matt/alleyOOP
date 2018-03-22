using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project.Models.Requests
{
    public class ScrapeAddRequest
    {
        [Required]
        public string Url { get; set; }

        public List <string> Opponent { get; set; }

        public List <string> Score { get; set; }
    }
}
