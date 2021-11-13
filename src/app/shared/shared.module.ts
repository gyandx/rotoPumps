import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TermsConditionsComponent } from './footerContents/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './footerContents/privacy-policy/privacy-policy.component';
import { ServiceSupportComponent } from './footerContents/service-support/service-support.component';
import { RotoEdgeComponent } from './footerContents/roto-edge/roto-edge.component';
import { ProductsComponent } from './footerContents/products/products.component';
import { ReturnsComponent } from './footerContents/returns/returns.component';
import { ContactUsComponent } from './footerContents/contact-us/contact-us.component';
import { AwardsComponent } from './footerContents/awards/awards.component';
import { ResearchComponent } from './footerContents/research/research.component';
import { DirectivesModule } from '../directives/directives.module';
import { BannerComponent } from './banner/banner.component';
import { TirranaGeneralPumpComponent } from './footerContents/tirrana-general-pump/tirrana-general-pump.component';
import { TirranaAgriculturalPumpNewComponent } from './footerContents/tirrana-agricultural-pump-new/tirrana-agricultural-pump-new.component';
import { RetrofitSparePartsComponent } from './footerContents/retrofit-spare-parts/retrofit-spare-parts.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,
     TermsConditionsComponent, PrivacyPolicyComponent,
     ServiceSupportComponent, RotoEdgeComponent,
     ProductsComponent, ReturnsComponent, ContactUsComponent,
     AwardsComponent, ResearchComponent, BannerComponent, TirranaAgriculturalPumpNewComponent, TirranaGeneralPumpComponent, RetrofitSparePartsComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ]
})
export class SharedModule { }
