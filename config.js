// Configuración de Supabase para GitHub Pages
// IMPORTANTE: Reemplaza estos valores con los de tu proyecto Supabase

const SUPABASE_CONFIG = {
    url: 'https://akcmrohtaxevsgszpxqo.supabase.co', // Reemplazar con tu URL
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrY21yb2h0YXhldnNnc3pweHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MzY1NjIsImV4cCI6MjA4MjAxMjU2Mn0.lqbBEwZg8Ete797gKuBj4GhZmskDHP3i_-iQcIzlW5k' // Reemplazar con tu anon key
};

// NO modificar esta línea
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
