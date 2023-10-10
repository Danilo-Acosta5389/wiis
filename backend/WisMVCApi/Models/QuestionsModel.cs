using System.ComponentModel.DataAnnotations;

#nullable disable

namespace WisMVCApi.Models
{
    public class QuestionsModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }

        public IEnumerable<AnswersModel> Answers { get; set; }
    }
}
