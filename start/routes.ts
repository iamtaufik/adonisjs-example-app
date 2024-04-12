/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '../app/controllers/users_controller.js'

router.on('/').renderInertia('home', { version: 6, headline: 'This Page rendered on server 🚀🚀' })
router.on('/about').renderInertia('about', { users: UsersController.show })
router.get('/api/users', UsersController.show)
