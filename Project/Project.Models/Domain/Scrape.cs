using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Models.Domain
{
    public class Scrape
    {
        public string Url { get; set; }
        public List <string>Opponent { get; set; }
        public List <string> Score { get; set; }
    }
}
