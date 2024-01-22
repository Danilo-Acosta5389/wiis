using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace WisMVCApi.Models
{
    public class QuestionsModel
    {
        [Key]
        [NotNull]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        public string AnswerType { get; set; }

        public IEnumerable<AnswersModel> Answers { get; set; }
    }
}
