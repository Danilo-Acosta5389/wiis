using Microsoft.EntityFrameworkCore;
using WisMVCApi.Models;

#nullable disable

namespace WisMVCApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
        }

        public DbSet<QuestionsModel> Questions { get; set; }
        public DbSet<AnswersModel> Answers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Mapping Foreign Keys
            // AnswersTable
            modelBuilder.Entity<AnswersModel>()
                .HasOne(x => x.Questions)
                .WithMany(x => x.Answers)
                .HasForeignKey(x => x.QuestionId);

            modelBuilder.Entity<QuestionsModel>().HasData(
                new QuestionsModel { Id = 1, Title = "Are we cyborgs?", Text = "Yes / No/Don’t know what a cyborg is" },
                new QuestionsModel { Id = 2, Title = "Do technology set us free?", Text = "1-5" },
                new QuestionsModel { Id = 3, Title = "Are you worried about the future?", Text = "1-5" },
                new QuestionsModel { Id = 4, Title = "Does our job define us?", Text = "1-5" },
                new QuestionsModel { Id = 5, Title = "How would you describe your mental health?", Text = "1-5" });

            modelBuilder.Entity<AnswersModel>().HasData(
                new AnswersModel { Id = 1, Number = 5, QuestionId = 1},
                new AnswersModel { Id = 2, Number = 4, QuestionId = 2 },
                new AnswersModel { Id = 3, Number = 2, QuestionId = 3 },
                new AnswersModel { Id = 4, Number = 5, QuestionId = 4 },
                new AnswersModel { Id = 5, Number = 5, QuestionId = 5 });
        }
    }
}
