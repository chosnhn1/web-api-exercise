function createUser(firstName, lastName) {
  return {
    firstName,
    lastName,
    lastUpdated: new Date(),
    toJSON() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        lastUpdated: this.lastUpdated.getTime()
      }
    }
  }
}

const userProfile = createUser('Ava', 'Johnson');