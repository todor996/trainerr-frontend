# Mock Server with Mirage // Guide

This guide will show you how to use Mirage and add new routes,
This will enable you to call server with `api` instance, but [mirage.js](https://miragejs.com/) will intercept calls for registered routes and return mocked data.

## 1. Structure

Create a folder with a name of a resource and proper structure.

1. Create a folder with a name of a resource (e.g. `training`).
2. Create `.mock.ts` file (e.g. `trainingPlans.mock.ts`).
3. Create `.routes.ts` file (e.g. `trainingPlans.routes.ts`).

## 2. Populate mirages `db`

1. Populate mock file (eg [trainingPlans.mock.ts](./training/trainingPlans.mock.ts)) and export `const` value (eg `trainingPlansMock`).
2. Add mocked data into mirage's `db` in [routes.mirage.ts](./routes.mirage.ts).

   ```ts
   createServer({
     // ...
     seeds(server) {
       server.db.loadData({
         // ...
         trainingPlans: trainingPlansMock, // now you can access this data like `server.db.trainingPlans`
         // ...
       });
     },
     // ...
   });
   ```

## 3. Add routes

1. Add functions in `.routes.ts` file (e.g. [trainingPlans.routes.ts](./training/trainingPlans.routes.ts))
2. Register new routes in [routes.mirage.ts](./routes.mirage.ts).

   ```ts
   createServer({
     // ...
     routes() {
       // ...
       this.get('training/plans', trainingPlansRoutes.get(this));
       this.get('training/plans/:id', trainingPlansRoutes.getById(this));
       this.post('training/plans', trainingPlansRoutes.post(this));
       this.put('training/plans/:id', trainingPlansRoutes.put(this));
       this.delete('training/plans/:id', trainingPlansRoutes.delete(this));
       // ...
     },
     // ...
   });
   ```

3. Test your new routes in the application by using `api` instance that has proper configuration.

   ```ts
   const response = await this.api.get('training/plans');
   ```

## After BE develops proper endpoints

When BE develops proper endpoints, you can remove/comment mirage's routes and use real endpoints.
And now your application will use real endpoints.

```ts
createServer({
  // ...
  routes() {
    // ...
    // this.get('training/plans', trainingPlansRoutes.get(this));
    // this.get('training/plans/:id', trainingPlansRoutes.getById(this));
    // this.post('training/plans', trainingPlansRoutes.post(this));
    // this.put('training/plans/:id', trainingPlansRoutes.put(this));
    // this.delete('training/plans/:id', trainingPlansRoutes.delete(this));
    // ...
  },
  // ...
});
```
