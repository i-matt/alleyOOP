using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Project.Models.Requests;
using Project.Models.Domain;
using Project.Services.Services;
using System.Collections.Generic;

namespace Project.Tests
{
    [TestClass]
    public class AccountTest
    {
        PersonService svc = new PersonService();

        [TestMethod]
        public void Insert_Test()
        {
            PersonAddRequest model = new PersonAddRequest
            {
                AccountId = 7,
                Username = "Cup",
                PhotoId = 3,
                Description = "This is a cup",
                ModifiedBy = "Me"
            };

            svc.Insert(model);
            Assert.IsTrue(model.AccountId != 0, "Insert failed!");
        }

        [TestMethod]
        public void Update_Test()
        {
            PersonAddRequest model = new PersonAddRequest
            {
                AccountId = 1,
                Username= "New Cup",
                PhotoId = 0,
                Description = "This is an updated cup",
                ModifiedBy = "Me2"
            };

            svc.Update(model);
            Assert.IsTrue(model.AccountId > 0, "Update failed!");
        }

        [TestMethod]
        public void Delete_Test()
        {
            svc.Delete(2);
            Person result = svc.GetById(2);
            Assert.IsTrue(result.AccountId == 0, "Delete has failed");
        }

        [TestMethod]
        public void SelectAll_Test()
        {
            List<Person> result = svc.GetAll();
            Assert.IsTrue(result.Count > 0, "Select All has failed");
        }

        [TestMethod]
        public void SelectById_Test()
        {
            Person result = svc.GetById(1);
            Assert.IsTrue(result.AccountId > 0, "Select By Id has failed");
        }
    }
}
