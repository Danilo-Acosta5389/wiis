using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WisMVCApi.Data;
using WisMVCApi.Models;

namespace WisMVCApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public QuestionController(ApplicationDbContext context)
        {
            _context = context;
        }


        // GET: api/question/
        [HttpGet]
        public async Task<List<QuestionsModel>> Get()
        {
            return await _context.Questions.ToListAsync();
        }

        // POST: api/question/{Title}/{Text}
        [HttpPost]
        public async Task<ActionResult<QuestionsModel>> Post(QuestionsModel questionModel)
        {
            var post = _context.Add(questionModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { title = questionModel.Title, text = questionModel.Text }, questionModel);
        }


    }
}
