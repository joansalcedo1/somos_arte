# 🎨 Guía de Colores - Academia Artística Somos Arte

## Sistema de Colores Centralizado

Este documento es tu referencia para mantener la coherencia de colores en todo el proyecto.

---

## 📋 Paleta de Colores Principal

### 🟡 COLOR PRIMARIO (Identidad Principal)
**Amarillo Dorado** - Este es el color de la academia
- **Valor HEX**: `#FCB900`
- **Uso**: Headers, navegación, botones principales, backgrounds destacados
- **CSS**: `bg-[#FCB900]` o `text-[#FCB900]`
- **Ejemplos**: Nav bar, Footer background, Button primary

### 🟨 COLOR SECUNDARIO (Acentos)
**Amarillo Claro** - Para elementos secundarios
- **Valor HEX**: `#FDD835`
- **Uso**: Backgrounds alternativos, acentos suaves
- **CSS**: `bg-[#FDD835]` o `text-[#FDD835]`
- **Ejemplos**: Sección Contactanos background, líneas decorativas

### 🏅 COLOR DE ÉNFASIS (Hover/Active States)
**Oro Más Oscuro** - Para interactividad
- **Valor HEX**: `#D4AF37`
- **Uso**: Hover states, bordes, detalles
- **CSS**: `bg-[#D4AF37]` o `hover:bg-[#D4AF37]`
- **Ejemplos**: Hover buttons, Border accents, highlight effects

### 🌑 COLOR OSCURO DE ÉNFASIS
**Marrón Tierra Oscuro** - Para contraste y elegancia
- **Valor HEX**: `#E8B923`
- **Uso**: Hover primario, estados activos intensos
- **CSS**: `bg-[#E8B923]` o `hover:bg-[#E8B923]`
- **Ejemplos**: Servicios header background, Strong emphasis

**Marrón Tierra** - Complementario elegante
- **Valor HEX**: `#8B6F47`
- **Uso**: Backgrounds segmentados, títulos secundarios
- **CSS**: `bg-[#8B6F47]` o `text-[#8B6F47]`
- **Ejemplos**: Servicios left panel, Img_hero background

**Marrón Muy Oscuro** - Para máxima relevancia
- **Valor HEX**: `#654321`
- **Uso**: Headers oscuros, textos fuertes
- **CSS**: `bg-[#654321]` o `text-[#654321]`
- **Ejemplos**: Servicios item headers

---

## ⚪ COLORES NEUTROS (Backgrounds y Textos)

### Fondos
- **Blanco**: `#FFFFFF` 
  - CSS: `bg-white` o `bg-neutral-white` o `bg-[#FFFFFF]`
  - Uso: Fondos principales, tarjetas

- **Gris Muy Claro**: `#F8F9FA`
  - CSS: `bg-neutral-light` o `bg-[#F8F9FA]`
  - Uso: Backgrounds alternativos, secciones

### Textos
- **Gris Oscuro/Casi Negro**: `#333333`
  - CSS: `text-neutral-dark` o `text-[#333333]`
  - Uso: Textos principales, títulos

- **Gris Intermedio**: `#666666`
  - CSS: `text-neutral-gray` o `text-[#666666]`
  - Uso: Textos secundarios, subtítulos

### Bordes y Divisiones
- **Gris Claro**: `#DDDDDD`
  - CSS: `border-neutral-border` o `border-[#DDDDDD]`
  - Uso: Bordes, líneas divisorias

---

## 🎯 COLORES DE ESTADO (Para Validaciones)

- **Éxito**: `#4CAF50` - Para mensajes positivos
- **Advertencia**: `#FF9800` - Para alertas
- **Error**: `#F44336` - Para errores
- **Información**: `#2196F3` - Para información general

---

## 📊 Jerarquía de Uso por Componentes

### Navegación (Nav.jsx)
```
Background: #FCB900 (primario)
Text: white/neutraldark
Hover: #E8B923
```

### Servicios (Servicios.jsx)
```
Background general: #F8F9FA (neutral-light)
Panel izquierdo: #8B6F47 (marrón tierra)
Headers items: #654321 (marrón oscuro)
Panel derecho: #FCB900 (primario)
Numeración: #D4AF37 (oro)
```

### Contactanos (Contactanos.jsx)
```
Background: #FDD835 (amarillo claro)
Form: white
Button: #FCB900 primario, #E8B923 hover
```

### Eventos (Eventos.jsx)
```
Background: #F8F9FA (neutral-light)
Gradiente títulos: #FCB900 to #D4AF37
Tarjetas: white
Card titles: #8B6F47
Gradiente imágenes: #FDD835/20 to #D4AF37/20
```

### Footer (Footer.jsx)
```
Background: #FCB900 (primario)
Text: #333333 (neutral-dark)
Secondary text: #666666 (neutral-gray)
```

### Botones (Todos los CTAs)
```
Normal: #FCB900
Hover: #E8B923
Active: #654321
```

### Tags/Píldoras (Card_hero.jsx)
```
Música: #D4AF37 (oro)
Teatro: #FCB900 (primario)
Baile: #E8B923 (dorado hover)
Artes plásticas: #8B6F47 (tierra)
```

---

## 💡 REGLAS DE APLICACIÓN

### ✅ DO's (Sí hacer)
- Usar `#FCB900` para elementos que busquen atención principal
- Usar `#8B6F47` para secciones que necesiten contraste elegante
- Usar `text-neutral-dark` (#333333) para textos de cuerpo
- Usar neutrals para backgrounds amplios
- Aplicar `hover:bg-[#E8B923]` a todos los botones interactivos

### ❌ DON'Ts (No hacer)
- ❌ NO usar colores arbitrarios como `bg-amber-300`, `bg-cyan-400`, `bg-blue-600`
- ❌ NO mezclar diferentes tonos de amarillo sin propósito
- ❌ NO usar grises genéricos (`bg-gray-200`) → usar `bg-neutral-light`
- ❌ NO aplicar textos blancos sobre backgrounds amarillos claros
- ❌ NO crear nuevos colores sin documentarlos primero

---

## 🔄 Cómo Aplicar en Tu Código

### En lugar de esto ❌
```jsx
<button className="bg-blue-600 hover:bg-blue-700">Click</button>
<div className="bg-gray-200">Contenido</div>
<p className="text-black">Texto</p>
```

### Usa esto ✅
```jsx
<button className="bg-[#FCB900] hover:bg-[#E8B923] text-neutral-dark">Click</button>
<div className="bg-neutral-light">Contenido</div>
<p className="text-neutral-dark">Texto</p>
```

---

## 🎨 Consideraciones de Accesibilidad (WCAG)

- ✅ `#333333` sobre `#FFFFFF` = Contraste 12.6:1 (AAA)
- ✅ `#FCB900` sobre `#FFFFFF` = Contraste 4.5:1 (AA)
- ✅ `#333333` sobre `#FDD835` = Contraste 7.2:1 (AAA)
- ⚠️ `#FCB900` sobre `#F8F9FA` = Contraste bajo, usar con cuidado

**Recomendación**: Siempre usa `text-neutral-dark` para textos sobre amarillos claros.

---

## 📝 Checklist para Nuevas Características

Antes de agregar un nuevo componente:

- [ ] Decidir si usa color primario (#FCB900) o secundario (#FDD835)
- [ ] Confirmar contraste de textos (mínimo 4.5:1)
- [ ] Usar colores neutrals para backgrounds amplios
- [ ] Aplicar hover states con #E8B923
- [ ] Documentar nuevos usos de color aquí
- [ ] TEST: Ver en navegador y validar consistencia

---

## 🚀 Próximos Pasos

Para actualizar más componentes en el futuro:

1. Reemplaza `bg-gray-*` con `bg-neutral-*` o `bg-[#HEX]`
2. Reemplaza `text-black` con `text-neutral-dark`
3. Reemplaza colores aleatorios con los de esta paleta
4. Abre este archivo y verifica la jerarquía antes de cambiar colores

---

**Última actualización**: Marzo 2026
**Diseño**: Sistema de colores profesional para Academia Somos Arte
