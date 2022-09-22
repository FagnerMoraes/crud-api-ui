using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using crud_dotnet.Data;
using crud_dotnet.Models;

namespace crud_dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CursoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Curso
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Curso>>> Getcursos()
        {
          if (_context.cursos == null)
          {
              return NotFound();
          }
            return await _context.cursos.ToListAsync();
        }

        // GET: api/Curso/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Curso>> GetCurso(int id)
        {
          if (_context.cursos == null)
          {
              return NotFound();
          }
            var curso = await _context.cursos.FindAsync(id);

            if (curso == null)
            {
                return NotFound();
            }

            return curso;
        }

        // PUT: api/Curso/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurso(int id, Curso curso)
        {
            if (id != curso.Id)
            {
                return BadRequest();
            }

            _context.Entry(curso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Curso
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Curso>> PostCurso(Curso curso)
        {
          if (_context.cursos == null)
          {
              return Problem("Entity set 'AppDbContext.cursos'  is null.");
          }
            _context.cursos.Add(curso);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCurso", new { id = curso.Id }, curso);
        }

        // DELETE: api/Curso/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurso(int id)
        {
            if (_context.cursos == null)
            {
                return NotFound();
            }
            var curso = await _context.cursos.FindAsync(id);
            if (curso == null)
            {
                return NotFound();
            }

            _context.cursos.Remove(curso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CursoExists(int id)
        {
            return (_context.cursos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
