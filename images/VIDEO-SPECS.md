# 📹 Especificaciones para Video de Perfil

## 🎯 Recomendaciones Técnicas

### **Duración:**
- **Ideal:** 3-8 segundos
- **Máximo:** 15 segundos
- **Loop:** El video se reproduce en bucle automáticamente

### **Resolución:**
- **Recomendada:** 800x800px (cuadrada)
- **Mínima:** 600x600px
- **Máxima:** 1000x1000px

### **Formato y Compresión:**
- **Formato principal:** MP4 (H.264)
- **Formato alternativo:** WebM (mejor compresión)
- **Peso máximo:** 2MB (idealmente < 1MB)

### **Características técnicas:**
- **Framerate:** 24-30 FPS
- **Sin audio** (se reproduce muted)
- **Autoplay** habilitado
- **Loop** infinito

## 📁 Archivos Necesarios

Coloca estos archivos en la carpeta `images/`:

1. **profile-video.mp4** - Video principal
2. **profile-video.webm** - Video alternativo (opcional)
3. **profile.jpg** - Imagen de respaldo (poster)

## 🎨 Ideas de Contenido

### **Profesional:**
- Saludo con la mano
- Sonrisa natural
- Gesto de aprobación (pulgar arriba)
- Transición de serio a sonriente

### **Creativo/Tech:**
- Typing en teclado
- Trabajando en laptop
- Gesture de "coding"
- Cinemagraph sutil (parpadeo, respiración)

## 🔧 Herramientas de Edición

### **Gratuitas:**
- **OpenShot** - Editor simple
- **DaVinci Resolve** - Profesional gratuito
- **Online:** Canva, Kapwing

### **Móvil:**
- **InShot** (iOS/Android)
- **CapCut** (iOS/Android)

## ⚡ Optimización

### **Comando FFmpeg (si tienes instalado):**
```bash
# Convertir y optimizar para web
ffmpeg -i input.mov -vf scale=800:800 -c:v libx264 -crf 28 -an -t 5 profile-video.mp4

# Crear versión WebM
ffmpeg -i profile-video.mp4 -c:v libvpx-vp9 -crf 30 -an profile-video.webm
```

## 🚀 Fallback

Si el video no carga, automáticamente mostrará la imagen `profile.jpg`