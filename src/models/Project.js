
class Project {
  constructor(data, id) {
    this.name = data.name

    this.id = id
  }

  toDocument() {
    return {
      name: this.name
    }
  }
}

export default Project
