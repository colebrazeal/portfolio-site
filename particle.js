let camera 
let scene 
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let enableMouseTracking = window.innerWidth > 1199

init()
animate()

function init () {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
    camera.position.z = 500

    scene = new THREE.Scene()
    scene.background = new THREE.Color('#000')
    scene.fog = new THREE.FogExp2(0xffffff, 0.001)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const colors = []
    const size = 2000

    const colorOptions = [
        new THREE.Color('#FFC0CB'),
        new THREE.Color('#ffffff')
    ]

    for (let i = 0; i < 20000; i++) {
        const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
        const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
        const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

        vertices.push(x, y, z)

        const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
        colors.push(color.r, color.g, color.b)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    material = new THREE.PointsMaterial({
        size: 8,
        map: generateCircleTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexColors: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    document.body.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', onWindowResize)
}

function onWindowResize () {
    windowHalfX = window.innerWidth / 2
    windowHalfY = window.innerHeight / 2

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)

    enableMouseTracking = window.innerWidth > 1199
}

function onPointerMove (event) {
    if (!enableMouseTracking) return
    mouseX = event.clientX - windowHalfX
    mouseY = event.clientY - windowHalfY
}

function animate () {
    requestAnimationFrame(animate)
    render()
}

function render () {
    camera.position.x += (mouseX - camera.position.x) * 0.02 
    camera.position.y += (-mouseY - camera.position.y) * 0.02 
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    scene.rotation.x += 0.001
    scene.rotation.y += 0.002 
}

function generateCircleTexture() {
    const size = 128
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')

    const gradient = context.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
    )

    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.5)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    context.fillStyle = gradient
    context.fillRect(0, 0, size, size)

    const texture = new THREE.CanvasTexture(canvas)
    return texture
}
