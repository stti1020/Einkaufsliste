using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class ProductDbService
    {

        internal AppDbService AppDbService;

        internal ProductDbService(AppDbService appDbService)
        {
            AppDbService = appDbService;
        }
        
        public List<Product> GetAllProduct()
        {
            return AppDbService.Context.Product.ToList();
            
            
        }

        public bool AddProduct(string name, int quantity, string unit, string supermarket)
        {
            var success = true;

            var product = new Product
            {
                Name = name,
                Quantity = quantity,
                Unit = unit,
                Supermarket = supermarket
            };
           

            try
            {
                if (product != null)
                {
                    AppDbService.Context.Product.Add(product);
                    AppDbService.Context.SaveChanges();
                }

            }
            catch
            {
                success = false;
            }

            return success;
        }

        public bool DeleteProductByName(string name)
        {
            var success = true;

            try
            {
                var product = AppDbService.Context.Product.Where(p => p.Name == name).FirstOrDefault();

                if (product == null)
                {
                    success = false;
                }
                else
                {
                    AppDbService.Context.Product.Remove(product);
                    AppDbService.Context.SaveChanges();
                }
            }
            catch
            {
                success = false;
            }

            return success;
        }

        public bool DeleteAllProducts()
        {
            var success = true;

            var allProducts = GetAllProduct();

            try
            {
                if (allProducts == null)
                {
                    success = false;
                }
                else
                {
                    AppDbService.Context.Product.RemoveRange(allProducts);
                    AppDbService.Context.SaveChanges();
                }
                
            }
            catch
            {
                success = false;
            }

            return success;
        }
    }
}
