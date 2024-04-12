// import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  static async show() {
    return await User.query()
  }
}
