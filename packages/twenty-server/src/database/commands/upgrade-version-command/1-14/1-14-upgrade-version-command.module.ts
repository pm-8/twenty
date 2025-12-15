import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DeleteRemovedAgentsCommand } from 'src/database/commands/upgrade-version-command/1-14/1-14-delete-removed-agents.command';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { AiAgentModule } from 'src/engine/metadata-modules/ai/ai-agent/ai-agent.module';
import { DataSourceModule } from 'src/engine/metadata-modules/data-source/data-source.module';
import { WorkspaceCacheModule } from 'src/engine/workspace-cache/workspace-cache.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkspaceEntity]),
    DataSourceModule,
    WorkspaceCacheModule,
    AiAgentModule,
  ],
  providers: [DeleteRemovedAgentsCommand],
  exports: [DeleteRemovedAgentsCommand],
})
export class V1_14_UpgradeVersionCommandModule {}
