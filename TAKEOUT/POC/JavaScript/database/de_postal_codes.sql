USE [TEST]
GO

/****** Object:  Table [dbo].[de_postal_codes]    Script Date: 30/09/2017 20:04:33 ******/
DROP TABLE [dbo].[de_postal_codes]
GO

/****** Object:  Table [dbo].[de_postal_codes]    Script Date: 30/09/2017 20:04:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[de_postal_codes](
	[Postal Code] [varchar](50) NULL,
	[Place Name] [varchar](50) NULL,
	[State] [varchar](50) NULL,
	[State Abbreviation] [varchar](50) NULL,
	[City] [varchar](50) NULL,
	[Latitude] [varchar](50) NULL,
	[Longitude] [varchar](50) NULL,
	[Column 7] [varchar](50) NULL
) ON [PRIMARY]
GO


