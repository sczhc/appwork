using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvcDemo.Controllers.Pages
{
    public class ECommerceController : Controller
    {

         public ActionResult OrderDetail()
        {
            return View("~/Views/Pages/ECommerce/OrderDetail.cshtml");
        }

         public ActionResult OrderList()
        {
            return View("~/Views/Pages/ECommerce/OrderList.cshtml");
        }

         public ActionResult ProductEdit()
        {
            return View("~/Views/Pages/ECommerce/ProductEdit.cshtml");
        }

         public ActionResult ProductItem()
        {
            return View("~/Views/Pages/ECommerce/ProductItem.cshtml");
        }

         public ActionResult ProductList()
        {
            return View("~/Views/Pages/ECommerce/ProductList.cshtml");
        }

    }
}
