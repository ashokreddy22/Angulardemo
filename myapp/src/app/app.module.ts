import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { StudentsComponent } from './students/students.component';
import { NewstudentComponent } from './students/newstudent/newstudent.component';
import { StudentComponent } from './students/student/student.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EcommComponent } from './ecomm/ecomm.component';
import { ObservablesComponent } from './observables/observables.component';
import { TformsComponent } from './tforms/tforms.component';
import { CartComponent } from './ecomm/cart/cart.component';
import { EcomproductComponent } from './ecomm/ecomproduct/ecomproduct.component';
import { RformsComponent } from './rforms/rforms.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserviewComponent } from './users/userview/userview.component';
import { PostsComponent } from './posts/posts.component';
import{ HttpClientModule } from'@angular/common/http';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'server', component: ServerComponent },
  { path: 'products', component: ProductComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'ecomm', component: EcommComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'tforms', component: TformsComponent },
  { path: 'rforms', component: RformsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserviewComponent },
  { path: 'posts', component: PostsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductComponent,
    NumbersComponent,
    BasicHighlightDirective,
    AccountsComponent,
    AccountComponent,
    NewaccountComponent,
    StudentsComponent,
    NewstudentComponent,
    StudentComponent,
    HomeComponent,
    EcommComponent,
    ObservablesComponent,
    TformsComponent,
    CartComponent,
    EcomproductComponent,
    RformsComponent,
    UsersComponent,
    UserComponent,
    UserviewComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }