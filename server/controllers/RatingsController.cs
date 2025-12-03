using Microsoft.AspNetCore.Mvc;
using open_health_web.Data;
using open_health_web.Models;
using Microsoft.EntityFrameworkCore;

namespace open_health_web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RatingsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostRating([FromBody] RatingDto request)
        {
            if (request.Score < 1 || request.Score > 10)
            {
                return BadRequest("Number should be between one and ten.");
            }

            var rating = new Rating
            {
                Score = request.Score,
                Feedback = request.Feedback,
                CreatedAt = DateTime.Now
            };

            _context.Ratings.Add(rating);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Saved!" });
        }
    }

    public class RatingDto
    {
        public int Score { get; set; }
        public string? Feedback { get; set; }
    }
}