const generateId = (): string => {
  return Math.random().toString(16).slice(2) + Date.now().toString(36)
}

export default generateId