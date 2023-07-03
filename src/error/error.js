export function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue"
  }
}

export function conflictError(message) {
  return {
    name: "ConflictError",
    message: message
  }
}

export function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No results for this search!"
  }
}

export function badRequestError() {
  return {
    name: "BadRequestError",
    message: "This request cannot be processed"
  }
}