function changeOpacity(bg, userPosition) {
    bg.style.opacity = 1 - (userPosition / 460)

    if (bg.style.opacity <= 0.2) {
        bg.style.opacity = 0.2
        return
    }
}

export default changeOpacity