import { Module } from '@nestjs/common';
import { APIModule } from './API/API.module';
import { DomainModule } from './Domain/Domain.module';

@Module({ imports: [APIModule, DomainModule] })
export class CoreModule {}
