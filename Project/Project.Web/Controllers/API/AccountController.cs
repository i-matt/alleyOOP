using Project.Models.Domain;
using Project.Models.Requests;
using Project.Models.Responses;
using Project.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project.Web.Controllers.API
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        AccountService svc = new AccountService();

        // GET api/<controller>
        [Route("selectall"), HttpGet]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                ItemListResponse<Account> resp = new ItemListResponse<Account>();
                resp.Items = svc.SelectAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        // GET api/<controller>/5
        [Route("{id:int}"), HttpGet]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                ItemResponse<Account> resp = new ItemResponse<Account>();
                resp.Item = svc.SelectById(id);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        // POST api/<controller>
        [Route, HttpPost]
        public HttpResponseMessage Post(AccountAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    model.ModifiedBy = "myController";
                    ItemResponse<int> resp = new ItemResponse<int>();
                    resp.Item = svc.Insert(model);
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

        // PUT api/<controller>/5
        [Route("{id:int}"), HttpPut]
        public HttpResponseMessage Put(AccountUpdateRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    model.ModifiedBy = "myController";
                    SuccessResponse resp = new SuccessResponse();
                    svc.Update(model);
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

        // DELETE api/<controller>/5
        [Route("{id:int}"), HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                SuccessResponse resp = new SuccessResponse();
                svc.Delete(id);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        // DELETE api/<controller>
        [Route("deleteall"), HttpDelete]
        public HttpResponseMessage DeleteAll()
        {
            try
            {
                SuccessResponse resp = new SuccessResponse();
                svc.DeleteAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}