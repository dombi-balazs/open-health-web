using System.ComponentModel.DataAnnotations;

namespace open_health_web.Models
{
    public class Rating
    {
        [Key]
        public int Id { get; set; }

        [Range(1, 10)]
        public int Score { get; set; }

        [MaxLength(50)]
        public string? Feedback { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}