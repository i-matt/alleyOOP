using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Models.Domain
{
    public class ChargeStripe
    {
        public string Receipt_Email { get; set; }

        public int Amount { get; set; } //amount in cents

        public string Currency { get; set; }

        public string Description { get; set; }

        public string Source { get; set; }
    }
}