using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace crud_dotnet.Models
{
    public class Curso
    {
        [JsonPropertyName("_id")]
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string? Name { get; set; }
        [Required]
        [StringLength(200)]
        public string? Categoria { get; set; }
    }
}