using Project.Models.Domain;
using Project.Models.Responses;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project.Web.Controllers.Api
{
    [RoutePrefix("api/stripe")]
    public class StripeController : ApiController
    {
        [Route, HttpPost]
        public HttpResponseMessage ChargeUser(ChargeStripe model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    string key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";
                    StripeConfiguration.SetApiKey(key);
                    // Get the payment token submitted by the form:
                    string token = model.Source;
                    var amount = model.Amount;
                    var email = model.Receipt_Email;
                    var charges = new StripeChargeService();

                    var charge = charges.Create(new StripeChargeCreateOptions
                    {
                        ReceiptEmail = email,
                        Amount = amount,
                        Currency = "usd",
                        Description = "Donation",
                        SourceTokenOrExistingSourceId = token
                    });

                    SuccessResponse resp = new SuccessResponse();
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
