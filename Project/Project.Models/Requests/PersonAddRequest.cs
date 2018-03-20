using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project.Models.Requests
{
    public class PersonAddRequest
    {
        [Required]
        public int AccountId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public int PhotoId { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string ModifiedBy { get; set; }
    }
}
