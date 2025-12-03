using Microsoft.EntityFrameworkCore; // <--- EZ HIÁNYZOTT (DbContext-hez)
using open_health_web.Models;

namespace open_health_web.Data
{
    // A DbContext-ből származtatjuk, ez teszi képessé adatbázis kezelésre
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Ez mondja meg, hogy legyen egy "Ratings" tábla, ami "Rating" típusú adatokat tárol
        public DbSet<Rating> Ratings { get; set; }
    }
}