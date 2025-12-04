using Microsoft.EntityFrameworkCore;
using open_health_web.Models;

namespace open_health_web.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Rating> Ratings { get; set; }
    }
}