export default function createLabel(object) {
    let label = document.createElement('label')
    label.className = 'labels'
    label.textContent = object
    return label
}

export function clearResult(object) {
    document.querySelector(object).innerHTML = ''
}
