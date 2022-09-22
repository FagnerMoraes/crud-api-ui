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
            modelBuilder.Entity<Curso>().HasData(
                new Curso{
                    Id = 1,
                    Name = "Dotnet API",
                    Categoria = "Back End"
                },
                new Curso{
                    Id = 2,
                    Name = "Angular",
                    Categoria = "Front End"
                }
            );
        }

        public DbSet<Curso> cursos{get; set;} = null!;
    }
}