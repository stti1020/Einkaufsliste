using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace WebApplication1.Models
{
    [Table("Products", Schema = "dbo")]
    public class Product
    {
        [Key]
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Unit { get; set; }

        public string Supermarket { get; set; }
    }
}
