using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;
using WebApplication1.Models;
using WebApplication1.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.API
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {

        private readonly AppDbService _appDbService;

        public ProductController()
        {
            _appDbService = new AppDbService();
        }

        [HttpGet]
        [Route("[action]")]
        public List<Product> GetAllProducts()
        {
            return _appDbService.ProductDbService.GetAllProduct();
        }

        // POST api/values
        [HttpPost]
        [Route("[action]")]
        public bool AddProduct(string name, int quantity, string unit, string supermarket)
        {
            var success = _appDbService.ProductDbService.AddProduct(name, quantity, unit, supermarket);

            return success;

        }
        [HttpDelete]
        [Route("[action]")]
        public bool DeleteProductByName(string name)
        {
            var success = _appDbService.ProductDbService.DeleteProductByName(name);

            return success;
        }

        [HttpDelete]
        [Route("[action]")]
        public bool DeleteAllProducts()
        {
            var success = _appDbService.ProductDbService.DeleteAllProducts();

            return success;
        }

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
