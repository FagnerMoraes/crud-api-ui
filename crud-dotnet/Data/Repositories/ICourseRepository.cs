using crud_dotnet.Models;
using System.Drawing;

namespace crud_dotnet.Data.Repositories
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetAllAsync();
        Task CreateAsync(Course course);
        Task UpdateAsync(Course course);
        Task DeleteAsync(Course course);
    }
}
