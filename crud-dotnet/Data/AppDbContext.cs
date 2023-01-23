using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using crud_dotnet.Models;
using Microsoft.EntityFrameworkCore;

namespace crud_dotnet.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Course>().HasData(
                new Course{
                    Id = 1,
                    Name = "Dotnet API",
                    Category = "Back End"
                },
                new Course{
                    Id = 2,
                    Name = "Angular",
                    Category = "Front End"
                }
            );
        }

        public DbSet<Course> cursos{get; set;} = null!;
    }
}