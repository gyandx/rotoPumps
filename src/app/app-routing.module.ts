import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error/error.component';
import { HomeDetailsResolver } from './views/home/home-resolver.service';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './shared/footerContents/about-us/about-us.component';
import { PaymentSuccessfulComponent } from './views/payment-successful/payment-successful.component';
import { RetroSparesComponent } from './views/retro-spares/retro-spares.component';
import { RetroSpareResolver } from './views/retro-spares/retrospare-resolver.service';
import { RotoSparesComponent } from './views/roto-spares/roto-spares.component';
import { TermsConditionsComponent } from './shared/footerContents/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './shared/footerContents/privacy-policy/privacy-policy.component';
import { ReturnsComponent } from './shared/footerContents/returns/returns.component';
import { ServiceSupportComponent } from './shared/footerContents/service-support/service-support.component';
import { ProductsComponent } from './shared/footerContents/products/products.component';
import { RotoEdgeComponent } from './shared/footerContents/roto-edge/roto-edge.component';
import { RetroSelectionComponent } from './views/retro-selection/retro-selection.component';
import { RetroResolver } from './views/retro-selection/retro-resolver.service';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { ContactUsComponent } from './shared/footerContents/contact-us/contact-us.component';
import { AwardsComponent } from './shared/footerContents/awards/awards.component';
import { ResearchComponent } from './shared/footerContents/research/research.component';
import { TirranaAgriculturalPumpNewComponent } from './shared/footerContents/tirrana-agricultural-pump-new/tirrana-agricultural-pump-new.component';
import { TirranaGeneralPumpComponent } from './shared/footerContents/tirrana-general-pump/tirrana-general-pump.component';
import { RetrofitSparePartsComponent } from './shared/footerContents/retrofit-spare-parts/retrofit-spare-parts.component';
import { ThankyouComponent } from './views/thankyou/thankyou.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent} ,
  {path: 'home', component: HomeComponent, resolve: { homeData : HomeDetailsResolver} } ,
  {path: 'aboutUs', component: AboutUsComponent} ,
  {path: 'contactUs', component: ContactUsComponent} ,
  {path: 'termsConditions', component: TermsConditionsComponent} ,
  {path: 'privacyPolicy', component: PrivacyPolicyComponent} ,
  {path: 'returnandcancellation', component: ReturnsComponent} ,
  {path: 'serviceandsupport', component: ServiceSupportComponent} ,
  {path: 'products', component: ProductsComponent} ,
  {path: 'rotoEdge', component: RotoEdgeComponent} ,
  {path: 'retrospares', component: RetroSparesComponent} ,
  {path: 'awards', component: AwardsComponent} ,
  {path: 'tirrana-agricultural-pump-new', component: TirranaAgriculturalPumpNewComponent} ,
  {path: 'tirrana-general-pump', component: TirranaGeneralPumpComponent} ,
  {path: 'retrofit-spare-parts', component: RetrofitSparePartsComponent} ,
  {path: 'research', component: ResearchComponent} ,
  {path: 'surfaceAgriPumps/:id', loadChildren: () => import('./views/surface-agri-pumps/surface-agri-pumps.module').
    then(m => m.SurfaceAgriPumpsModule)},
  {path: 'multiPurposePumps/:id', loadChildren: () => import('./views/multi-purpose-pumps/multi-purpose-pumps.module').
    then(m => m.MultiPurposePumpsModule)},
  {path: '', loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'cart', loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule)},
  {path: '', loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule)},
  {path: 'orderHistory', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
  {path: 'rotoSpares/:id', component: RotoSparesComponent} ,
  // {path: 'retroSpares/:id', component: RetroSparesComponent, resolve: { retroSpare: RetroSpareResolver}} ,
  {path: 'payment-successful', component: PaymentSuccessfulComponent} ,
  {path: 'thank-you', component: ThankyouComponent} ,
  {path: 'comingSoon', component: ComingSoonComponent} ,
  {path: 'error', component: ErrorComponent} ,
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
