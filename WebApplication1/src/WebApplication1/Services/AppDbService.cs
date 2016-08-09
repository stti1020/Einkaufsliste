using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class AppDbService
    {
        internal readonly ProductDbService productDbService;

        internal readonly AppDbContext Context;

        internal AppDbService()
        {
            productDbService = new ProductDbService(this);

            Context = new AppDbContext();
        }

        public ProductDbService ProductDbService
        {
            get { return productDbService;}
        }
    }
}
