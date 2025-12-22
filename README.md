
### 2. Activar GitHub Pages

1. Ve a Settings → Pages
2. En "Source" selecciona: `main` branch
3. Click en "Save"
4. Espera 2-3 minutos

Tu app estará disponible en: `https://tu-usuario.github.io/trivia-biblica/`

## 🎯 Cómo Jugar

### Jugador 1 (Creador de Sala)
1. Selecciona una categoría (Sansón, David o Elías)
2. Click en "CREAR SALA"
3. Escribe "CREAR"
4. Comparte el código de 6 dígitos con tu oponente

### Jugador 2 (Se une a sala)
1. Selecciona la misma categoría
2. Click en "CREAR SALA"
3. Ingresa el código de 6 dígitos
4. Espera a que inicie el juego

### Durante el Juego
- Ambos jugadores ven el cronómetro sincronizado de 10 segundos
- Selecciona tu respuesta antes de que se acabe el tiempo
- Los puntajes se actualizan en tiempo real
- Al finalizar las 15 preguntas, se muestra el ganador

## 🎨 Puntajes por Nivel

- **Fácil** (Sansón): 10 puntos por respuesta correcta
- **Medio** (David): 20 puntos por respuesta correcta
- **Difícil** (Elías): 50 puntos por respuesta correcta

## 🔧 Solución de Problemas

### El audio no suena
- Asegúrate de hacer click en la página primero (política de autoplay del navegador)
- Verifica que los archivos MP3 estén en `assets/sounds/`

### No se conectan los jugadores
- Verifica que ambos hayan configurado el mismo `config.js`
- Revisa la consola del navegador (F12) para ver errores
- Asegúrate de que tu proyecto Supabase esté activo

### Error de CORS en GitHub Pages
- Asegúrate de que `config.js` esté en la raíz del proyecto
- Verifica que tu URL de Supabase sea correcta

## 📱 Compatibilidad

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Responsive design (Mobile First)

## 📄 Licencia

MIT License - Uso libre para proyectos personales y educativos
