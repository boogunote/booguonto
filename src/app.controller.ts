import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as puppeteer from 'puppeteer-core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:\\Users\\ZStack\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
      args: [
        '--user-data-dir=C:\\Users\\ZStack\\dev\\user-data'
      ]
    });
    const page = await browser.newPage();
    await page.goto('http://www.80lib.com/user/index');
    await page.screenshot({path: 'example.png'});

    await browser.close();
    return this.appService.getHello();
  }
}
