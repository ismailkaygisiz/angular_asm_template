import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';
import {
  generatedAddress,
  generatedAnnouncement1,
  generatedAnnouncement2,
  generatedAsmName,
  generatedCityHealthLink,
  generatedContactAsmName,
  generatedContactAsmNumber,
  generatedContactCityHealthName,
  generatedContactCityHealthNumber,
  generatedContactDistrictHealthName,
  generatedContactDistrictHealthNumber,
  generatedGoogleMapsLink,
  generatedMetaDescription,
  generatedNavbarBrand,
  generatedTitle,
  generatedYoutubeLink,
} from 'src/data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  title: string = generatedTitle;
  metaDescription: string = generatedMetaDescription;
  navbarBrand: string = generatedNavbarBrand;
  asmName: string = generatedAsmName;
  youtubeLink: SafeResourceUrl;
  announcement1: string = generatedAnnouncement1;
  announcement2: string = generatedAnnouncement2;
  cityHealthLink: string = generatedCityHealthLink;
  googleMapsLink: SafeResourceUrl;
  contactAsmName: string = generatedContactAsmName;
  contactAsmNumber: string = generatedContactAsmNumber;
  contactCityHealthName: string = generatedContactCityHealthName;
  contactCityHealthNumber: string = generatedContactCityHealthNumber;
  contactDistrictHealthName: string = generatedContactDistrictHealthName;
  contactDistrictHealthNumber: string = generatedContactDistrictHealthNumber;
  address: string = generatedAddress;

  constructor(
    private seoService: SeoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.seoService.updateTitle(this.title);
    this.seoService.updateMeta('description', this.metaDescription);
    this.youtubeLink =
      this.sanitizer.bypassSecurityTrustResourceUrl(generatedYoutubeLink);
    this.googleMapsLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      generatedGoogleMapsLink
    );
  }
}
