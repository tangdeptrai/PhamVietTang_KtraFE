using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PhamVietTang_KtraFE.Controllers
{
    public class HomeController : Controller
    {
       /* public ActionResult Index()
        {
            return View();
        }*/

        public ActionResult PhamVietTang_KtraFE()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        /*public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }*/
    }
}