using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace WebApplication1.Models
{
    public class AppDbContext: IdentityDbContext<User>
    {
        public DbSet<Product> Product { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //ConnectionString für AzureDB
            optionsBuilder.UseSqlServer("Server=tcp:einkaufsliste-stegmuti.database.windows.net,1433;Initial Catalog=Einkaufsliste;Persist Security Info=False;User ID=stegmuti;Password=Julian88;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30");

            //ConnectionString für Lokale DB (Julian's Laptop)
            //optionsBuilder.UseSqlServer("Data Source=STEGMUTI-PC;Initial Catalog=einkaufsliste;Integrated Security=True");
        }
    }
}
